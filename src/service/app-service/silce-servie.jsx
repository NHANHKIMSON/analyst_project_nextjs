"use server";
export async function getAllSlice(params) {
    const res = await fetch(`https://mocki.io/v1/08a4974c-e680-4dbc-93d6-3b0223bd15b3`);
    const data = await res.json();
    return data.data;
}