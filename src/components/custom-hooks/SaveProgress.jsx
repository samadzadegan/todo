import useOnlineStatus from "../../hooks/useOnlineStatus";

export default function SaveProgress() {
  const isOnline = useOnlineStatus();
  return (
    <button
      className={`border border-gray-300 font-bold px-4 py-1 bg-gray-100 rounded ${
        isOnline ? "opacity-1" : "opacity-50"
      }`}
      disabled={!isOnline}
    >
      {isOnline ? "save progress" : "reconnecting.."}
    </button>
  );
}
