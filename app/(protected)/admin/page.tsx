"use client";
import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/rolegate";
import FormSuccess from "@/components/formSuccess";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

function AdminPage() {

  const onServerActionClick = () => {
    admin().then((data) => {
      if(data.error) {
        toast.error(data.error);
      }
      if(data.success) {
        toast.success(data.success);
      }
    })
  }

  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      console.log(response);
    if (response.ok) {
        toast.success("You are allowed to see this content");
        console.log("ok");
      } else {
        toast.error("Forbidden API route");
        console.log("not ok");
      }
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin Page</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content" />
        </RoleGate>
        <div className="flex items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API route</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>
        <div className="flex items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only Server Action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default AdminPage;
