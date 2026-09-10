import { RepairOrdersView } from "@/components/repair-orders/repair-orders-view";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Ordre de réparation - AutoBay'
}

export default function RepairOrdersPage(){
    return <RepairOrdersView />
}