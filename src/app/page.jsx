"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/form-schema";
import Navigation from "@/components/navbar";
import Spinner from "@/components/spinner";
import { redirect } from "next/navigation";

export default function ProfileForm() {
  redirect('/home');
  return (
    <>
    <Navigation />
    </>
  );
}