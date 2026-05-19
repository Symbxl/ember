import { Code2, Search, Target, Sparkles } from "lucide-react";

export default function ServiceIcon({ name }: { name: string }) {
  const common = { size: 22, strokeWidth: 1.8, color: "#fb923c" };
  switch (name) {
    case "code":
      return <Code2 {...common} />;
    case "search":
      return <Search {...common} />;
    case "target":
      return <Target {...common} />;
    case "spark":
      return <Sparkles {...common} />;
    default:
      return null;
  }
}
