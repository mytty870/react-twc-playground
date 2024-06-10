import { Card } from "./_components/Card";

export default function Home() {
  return (
    <div className="mx-4 space-y-4">
      <p>Card Sample</p>
      <Card>
        <p>Card Content</p>
      </Card>
      <Card $color="secondary">
        <p>Card Content</p>
      </Card>
    </div>
  );
}
