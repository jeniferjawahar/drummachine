import "./App.css";

export default function Features({
  volume,
  mode,
  power,
  onVolumeChange,
  onModeChange,
  onPowerChange,
}) {
  return (
    <div className="features">
      <input
        type="range"
        min="0"
        max="1"
        value={volume}
        step="0.1"
        onChange={onVolumeChange}
      />
      Music Volume:{volume * 100}
      <br />
      <label>Mode</label>
      <input
        type="checkbox"
        value={mode}
        onChange={() => onModeChange(mode)}
        disabled={!power}
      />
      <br />
      <label>Power</label>
      <input
        type="checkbox"
        value={power}
        onChange={() => onPowerChange(power)}
      />
    </div>
  );
}
