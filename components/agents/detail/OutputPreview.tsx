export default function OutputPreview({ output }: { output: string }) {
  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">输出预览</h2>
      <div className="bg-background border border-border rounded-lg p-6">
        <pre className="text-sm text-text-secondary whitespace-pre-wrap">{output}</pre>
      </div>
    </div>
  );
}
