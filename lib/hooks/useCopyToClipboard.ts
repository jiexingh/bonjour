import { useState } from 'react';

const useCopyToClipboard = (timeoutDuration = 2000) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = async (text: string): Promise<void> => {
    if (!navigator.clipboard) {
      // 使用 execCommand 作为后备
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), timeoutDuration);
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeoutDuration);
    } catch (error) {
      console.error('Failed to copy: ', error);
      alert('Failed to copy text!');
    }
  };

  return { copied, copy };
};

export default useCopyToClipboard;