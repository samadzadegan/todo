import useOnlineStatus from "../../hooks/useOnlineStatus";

export default function StatusUserOnline() {
  const isOnline = useOnlineStatus();

  return <div>{isOnline ? "Online" : "Offline"}</div>;
}
