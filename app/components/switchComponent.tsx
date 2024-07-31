import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { settingsData } from "@/store/atom";

import { useRecoilState } from "recoil";
type Props = {
  title: string;
};

export default function SwitchDemo({ title }: Props) {
  const [settings, setSettings] = useRecoilState(settingsData);

  return (
    <div className="grid grid-cols-2 items-center space-x-2">
      <Label htmlFor={title}>{title}</Label>
      <Switch
        id={title}
        checked={settings[title]}
        onCheckedChange={() =>
          setSettings((prev: any) => ({ ...prev, [title]: !prev[title] }))
        }
      />
    </div>
  );
}
