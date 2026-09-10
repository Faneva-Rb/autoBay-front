import { Plus } from "lucide-react";
import { Button } from "../kit/button";
import { PageHeader } from "../layout/page-header";

export function RepairOrdersView(){
    return <div>
        <PageHeader
        title="Ordre de réparation"
        description="Schedule and manage workshop appointments."
        actions={
          <Button>
            <Plus />
            Nouveau OR
          </Button>
        }
      />
    </div>
}