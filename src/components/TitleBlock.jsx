function TitleBlock({ sheet, of = '08', name, scale = 'NTS', className = '' }) {
  return (
    <div
      className={`hidden sm:flex items-stretch font-mono text-[10px] uppercase tracking-wider text-steel/70 border border-ink-line/80 select-none ${className}`}
      aria-hidden="true"
    >
      <div className="flex flex-col justify-center px-3 py-1.5 border-r border-ink-line/80">
        <span className="text-steel/50">Sheet</span>
        <span className="text-paper/80">{sheet}/{of}</span>
      </div>
      <div className="flex flex-col justify-center px-3 py-1.5 border-r border-ink-line/80">
        <span className="text-steel/50">Scale</span>
        <span className="text-paper/80">{scale}</span>
      </div>
      <div className="flex flex-col justify-center px-3 py-1.5">
        <span className="text-steel/50">Dwg</span>
        <span className="text-brass">{name}</span>
      </div>
    </div>
  )
}

export default TitleBlock
