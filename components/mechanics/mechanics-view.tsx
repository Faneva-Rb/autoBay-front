import { Plus } from "lucide-react";
import { Button } from "../kit/button";
import { PageHeader } from "../layout/page-header";


export function MechanicsView() {
    return <div>
        <PageHeader
            title="Mécaniciens"
            description="Schedule and manage workshop appointments."
            actions={
                <Button>
                    <Plus />
                    Nouveau mécanicien
                </Button>
            }
        />
    </div>
}