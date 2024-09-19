import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProfileEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialName: string; // 允许传入初始值
}

const ProfileEditDialog = ({
  open,
  onOpenChange,
  initialName
}: ProfileEditDialogProps) => {
  // 确保 useState 在组件的顶层调用
  const [name, setName] = useState<string>(initialName);

  // 使用 useEffect 监听 initialName 的变化
  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  const handleSave = () => {
    console.log("Saved:", { name });
    onOpenChange(false); // 关闭对话框
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="dark:text-black">信息编辑</DialogTitle>
          <DialogDescription>
            在此更改您的个人资料。完成后单击“保存”
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right dark:text-black">
              姓名
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3 dark:text-black"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSave}>保存</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileEditDialog;