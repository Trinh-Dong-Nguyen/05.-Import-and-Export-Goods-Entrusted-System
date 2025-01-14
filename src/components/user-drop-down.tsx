"use client";
import { LogOut, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuth from "@/hooks/use-auth";
import Loader from "@/components/loader";
import { useEffect, useState } from "react";
import { ErrorType } from "@/types/error.type";
import { toast } from "@/hooks/use-toast";
import useCustomer from "@/hooks/use-customer";
import { Customer, Employee } from "@/types/user.type";

const UserDropDown = () => {
  const { data: user, isLoading } = useAuth.useGetSession();
  const { useDetailsCustomer } = useCustomer();
  const { data: customer } = useDetailsCustomer(user?.customerId ?? "");
  const [currentUser, setCurrentUser] = useState<Employee | Customer>();
  useEffect(() => {
    if (user && user.customerId) {
      setCurrentUser(customer);
    } else {
      setCurrentUser(user?.employee);
    }
  }, [user, customer]);

  const logout = useAuth.useLogout();
  const route = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    if (loading) return;
    setLoading(true);
    try {
      await logout.mutateAsync();
      toast({
        title: "Logout success",
        description: "You have successfully logged out",
      });
      route.push("/login");
    } catch (error) {
      console.error({ error });
      switch ((error as ErrorType).statusCode) {
        case 401:
          toast({
            title: "Unauthorized",
            description: "You are not authorized to perform this action",
          });
          break;
        default:
          toast({
            title: "Logout failed",
            description: "Failed to logout",
          });
          break;
      }
    } finally {
      setLoading(false);
    }
  }

  if (isLoading) return <Loader />;

  if (!user)
    return (
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded px-4 py-1 outline-none xl:hover:bg-foreground/10">
        <div className="flex items-center justify-center md:gap-3">
          <div className="invisible w-0 text-right sm:visible sm:w-auto">
            <div className="text-[14px]">{currentUser?.name}</div>
            <div className="text-xs opacity-50">{user?.role.name}</div>
          </div>
          <Avatar>
            <AvatarImage
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${currentUser?.name}`}
              alt={currentUser?.name ?? "User"}
            />
            <AvatarFallback>{currentUser?.name}</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2">
        <DropdownMenuLabel className="text-center">
          {currentUser?.name}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-1 bg-foreground/20" />
        <Link href="/settings">
          <DropdownMenuItem className="cursor-pointer gap-2">
            <Settings></Settings>
            <span>Settings</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator className="my-1 bg-foreground/20" />
        <Button
          variant={"ghost"}
          onClick={() => handleLogout()}
          className="pl-0 w-full"
        >
          <DropdownMenuItem className="cursor-pointer gap-2">
            <LogOut></LogOut>
            <span>Log out</span>
          </DropdownMenuItem>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropDown;
