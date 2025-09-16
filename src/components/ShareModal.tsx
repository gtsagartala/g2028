import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import ShareMenu from '@/components/ShareMenu';

interface ShareModalProps {
  title: string;
  description: string;
  url: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ title, description, url }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={open ? menuRef : null} onClick={(e) => e.stopPropagation()}>
      <Button
        variant="outline"
        size="sm"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="w-8 h-8 p-0 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        title="Share"
      >
        <Share2 className="h-4 w-4" />
      </Button>

      {open && (
        <ShareMenu
          app={{
            id: 0,
            name: title,
            description,
            category: 'Case Study',
          }}
          shareUrl={url}
          shareText={`${title} — ${description}`}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default ShareModal;