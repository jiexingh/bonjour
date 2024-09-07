
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface ConfirmDeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void
}

const ConfirmDeleteDialog = ({open, onOpenChange}: ConfirmDeleteDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className='rounded-md'>
        <AlertDialogHeader>
          <AlertDialogTitle className='dark:text-primary'>确定执行当前删除操作?</AlertDialogTitle>
          <AlertDialogDescription>
           此操作无法撤消。这将永久删除您的帐户并从我们的服务器中删除您的数据
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='dark:text-primary'>取消</AlertDialogCancel>
          <AlertDialogAction>确定</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmDeleteDialog