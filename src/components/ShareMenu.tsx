import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Share2, Copy, Check, Facebook, MessageCircle, Twitter, Linkedin } from 'lucide-react';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

interface ShareMenuProps {
  app: {
    id: number;
    name: string;
    description: string;
    category: string;
  };
  shareUrl?: string;
  shareText?: string;
  onClose: () => void;
}

const ShareMenu: React.FC<ShareMenuProps> = ({ app, onClose, shareUrl: shareUrlOverride, shareText: shareTextOverride }) => {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = shareUrlOverride ?? `${window.location.origin}/apps/${app.id}`;
  const shareText = shareTextOverride ?? `Check out ${app.name} - ${app.category} App: ${app.description}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
    onClose();
  };

  const shareToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  const shareToTelegram = () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(telegramUrl, '_blank');
    onClose();
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank');
    onClose();
  };

  const shareToLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedinUrl, '_blank');
    onClose();
  };

  return (
    <Card className="absolute top-10 right-0 z-[100] p-4 w-64 shadow-xl border bg-background border-border/50">
      <div className="space-y-2 text-foreground pl-[10%]">
        <h4 className="font-semibold text-sm mb-3">Share {app.name}</h4>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={shareToFacebook}
          className="w-full justify-start gap-3 hover:bg-accent hover:text-accent-foreground"
        >
          <Facebook className="h-4 w-4" />
          Facebook
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={shareToWhatsApp}
          className="w-full justify-start gap-3 hover:bg-accent hover:text-accent-foreground"
        >
          <FaWhatsapp className="h-4 w-4" />
          WhatsApp
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={shareToTelegram}
          className="w-full justify-start gap-3 hover:bg-accent hover:text-accent-foreground"
        >
          <FaTelegram className="h-4 w-4" />
          Telegram
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={shareToTwitter}
          className="w-full justify-start gap-3 hover:bg-accent hover:text-accent-foreground"
        >
          <Twitter className="h-4 w-4" />
          Twitter
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={shareToLinkedIn}
          className="w-full justify-start gap-3 hover:bg-accent hover:text-accent-foreground"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </Button>

        <hr className="my-2" />

        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="w-full justify-start gap-3 hover:bg-accent hover:text-accent-foreground"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy Link
            </>
          )}
        </Button>
      </div>
    </Card>
  );
};

export default ShareMenu;