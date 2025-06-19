"use client";
import * as React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { toast } from "@/lib/toas";

const ReactGridLayout = WidthProvider(RGL);
const STORAGE_KEY = "zone_layout";

let idCounter = 0;
const getId = () => (++idCounter).toString();

export default function ZoneComponent() {
  const [layout, setLayout] = React.useState([]);
  const [zoneData, setZoneData] = React.useState({});
  const [zoneTitle, setZoneTitle] = React.useState("");
  const [zoneType, setZoneType] = React.useState("");
  const [color, setColor] = React.useState("");
  const [locationName, setLocationName] = React.useState("");
  const [locationLink, setLocationLink] = React.useState("");

  // Load layout from localStorage on mount
  // React.useEffect(() => {
  //   const saved = localStorage.getItem(STORAGE_KEY);
  //   if (saved) {
  //     const parsed = JSON.parse(saved);
  //     const loadedLayout = parsed.map((item) => ({
  //       x: item.layout.x,
  //       y: item.layout.y,
  //       w: item.layout.w,
  //       h: item.layout.h,
  //       i: item.id,
  //     }));
  //     const loadedZoneData = {};
  //     parsed.forEach((item) => {
  //       loadedZoneData[item.id] = {
  //         title: item.title,
  //         type: item.type,
  //         color: item.color,
  //       };
  //     });
  //     setLayout(loadedLayout);
  //     setZoneData(loadedZoneData);
  //     // Set idCounter to the highest existing id
  //     const maxId = Math.max(...parsed.map((z) => parseInt(z.id, 10)));
  //     idCounter = maxId;
  //   }
  // }, []);
  
  React.useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
  
      // Extract metadata
      const locationName = parsed.venueName || "";
      const locationLink = parsed.venueLocation || "";
  
      // Extract zone layout and data
      const data = parsed.venueInfo?.data || [];
  
      const loadedLayout = data.map((item) => ({
        x: item.layout.x,
        y: item.layout.y,
        w: item.layout.w,
        h: item.layout.h,
        i: item.id,
      }));
  
      const loadedZoneData = {};
      data.forEach((item) => {
        loadedZoneData[item.id] = {
          title: item.title,
          type: item.type,
          color: item.color || "", // optional: color might not exist in new structure
        };
      });
  
      setLayout(loadedLayout);
      setZoneData(loadedZoneData);
      setLocationName(locationName); // Make sure you have this state defined
      setLocationLink(locationLink); // Make sure you have this state defined
  
      // Set idCounter to highest existing ID
      const maxId = Math.max(...data.map((z) => parseInt(z.id, 10)));
      idCounter = maxId;
    }
  }, []);

  const saveLayoutToStorage = () => {
    const venueData = {
      // venueId: "0b561265-e0e5-4421",
      venueName: locationName,
      venueLocation: locationLink,
      venueInfo: {
        data: layout.map((item) => ({
          id: item.i,
          type: zoneData[item.i]?.type || "",
          title: zoneData[item.i]?.title || "",
          layout: {
            x: item.x,
            y: item.y,
            w: item.w,
            h: item.h,
          },
        })),
      },
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(venueData));
    toast.success("Layout saved");
  };

  const addNewItem = () => {
    const id = getId();
    // Changed y: Infinity to y: 0 to avoid potential key conflicts
    const newItem = { x: 0, y: 0, w: 3, h: 3, i: id };
    setLayout((prev) => [...prev, newItem]);
    setZoneData((prev) => ({
      ...prev,
      [id]: {
        title: zoneTitle || `Zone ${id}`,
        type: zoneType || "General",
        color: color || "#E2EFFF", // Default color if none selected
      },
    }));
    setZoneTitle("");
    setZoneType("");
    setColor("");
  };

  const deleteItem = (id) => {
    setLayout((prev) => prev.filter((item) => item.i !== id));
    setZoneData((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  return (
    <>
      <form className="w-full mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full space-y-1.5">
            <Label htmlFor="name">Location Name</Label>
            <Input
              id="locationName"
              placeholder="Enter location name"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
            />
          </div>
          <div className="w-full space-y-1.5">
            <Label htmlFor="name">Location Link</Label>
            <Input
              id="name"
              placeholder="Enter title"
              value={locationLink}
              onChange={(e) => setLocationLink(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="w-full space-y-1.5">
            <Label htmlFor="name">Zone</Label>
            <Input
              id="name"
              placeholder="Enter title"
              value={zoneTitle}
              onChange={(e) => setZoneTitle(e.target.value)}
            />
          </div>
          <div className="w-full space-y-1.5">
            <Label htmlFor="type">Choose ticket type</Label>
            <Select
              className="w-full"
              value={zoneType}
              onValueChange={setZoneType}
            >
              <SelectTrigger className={"w-full"}>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General">General</SelectItem>
                <SelectItem value="VIP">VIP</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div className="w-full space-y-1.5">
            <Label htmlFor="type">Zone Color</Label>
            <Select value={color} onValueChange={setColor}>
              <SelectTrigger className={"w-full"}>
                <SelectValue placeholder="Select Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="#E2EFFF">Blue</SelectItem>
                <SelectItem value="#FFE8E8">Red</SelectItem>
                <SelectItem value="#FBF5E6">Yellow</SelectItem>
                <SelectItem value="#F9F4FF">Purple</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="col-span-2 flex gap-2 mt-2">
          <Button type="button" onClick={addNewItem}>
            + Add Zone
          </Button>
          <Button
            type="button"
            onClick={saveLayoutToStorage}
            variant="secondary"
          >
            Save Layout
          </Button>
        </div>
      </form>

      <Card className="p-4 border border-dashed my-4 border-primary/100">
        <div className="rounded-2xl">
          <ReactGridLayout
            className="layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            width={1200}
            onLayoutChange={(newLayout) => setLayout(newLayout)}
            isDraggable
            isResizable
            useCSSTransforms
            draggableCancel=".no-drag"
            compactType={null} // Added to prevent automatic reordering
          >
            {layout.map((item) => {
              const zone = zoneData[item.i] || {};
              return (
                <div key={item.i} data-grid={item}>
                  <Card
                    className="h-full w-full box-border relative border"
                    style={{
                      backgroundColor: zone.color || "#E2EFFF",
                      borderColor:
                        zone.color === "#E2EFFF"
                          ? "#C2DEFF" // Blue
                          : zone.color === "#FFE8E8"
                          ? "#FFB6B6" // Red
                          : zone.color === "#FBF5E6"
                          ? "#FFDCB9" // Yellow
                          : zone.color === "#F9F4FF"
                          ? "#DEC2FE" // Purple
                          : "transparent",
                    }}
                  >
                    <CardContent className="h-full w-full flex flex-col items-center justify-center p-4 text-center">
                      <p className="text-lg font-semibold">{zone.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {zone.type}
                      </p>
                      <button
                        variant="outline"
                        size="sm"
                        className="absolute top-1 right-2 no-drag"
                        onClick={() => deleteItem(item.i)}
                      >
                        ✕
                      </button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </ReactGridLayout>
        </div>
      </Card>
    </>
  );
}
