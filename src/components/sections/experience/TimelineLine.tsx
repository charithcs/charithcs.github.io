
const TimelineLine = () => {
  return (
    <div className="absolute left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 hidden md:block z-0">
      <svg width="100%" height="100%" aria-hidden="true">
        <defs>
          <linearGradient id="experience-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#15ff67" />
            <stop offset="50%" stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          stroke="url(#experience-gradient)"
          strokeWidth="6"
          strokeDasharray="20 15"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default TimelineLine;
