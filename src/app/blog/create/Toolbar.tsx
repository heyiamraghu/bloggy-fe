"use client"

import {type Editor} from "@tiptap/react";
import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading2,
    UnderlineIcon, Heading3
} from "lucide-react";

import { Toggle } from "@/components/ui/toggle"
type Props = {
    editor: Editor | null
}

export function Toolbar({editor}: Props) {
    if (!editor) return null
    return (
        <div className="border border-input bg-transparent rounded-br-lg">
            <Toggle
                size="lg"
                pressed={editor.isActive("heading")}
                onPressedChange={() =>
                editor.chain().focus().toggleHeading({level: 3}).run()
            }
            >
                <Heading3 className="h-4 w-4"/>
            </Toggle>
            <Toggle
                size="lg"
                pressed={editor.isActive("bold")}
                onPressedChange={() =>
                    editor.chain().focus().toggleBold().run()
                }
            >
                <Bold className="h-4 w-4"/>
            </Toggle>
            <Toggle
                size="lg"
                pressed={editor.isActive("italic")}
                onPressedChange={() =>
                    editor.chain().focus().toggleItalic().run()
                }
            >
                <Italic className="h-4 w-4"/>
            </Toggle>
            <Toggle
                size="lg"
                pressed={editor.isActive("strikethrough")}
                onPressedChange={() =>
                    editor.chain().focus().toggleStrike().run()
                }
            >
                <Strikethrough className="h-4 w-4"/>
            </Toggle>

            <Toggle
                size="lg"
                pressed={editor.isActive("bulletList")}
                onPressedChange={() =>
                    editor.chain().focus().toggleBulletList().run()
                }
            >
                <List className="h-4 w-4"/>
            </Toggle>
        </div>
    )
}