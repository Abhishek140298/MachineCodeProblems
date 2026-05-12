import { useEffect, useRef, useCallback, useState } from "react";

export function useWebsocket(url) {
  /*Save the Websocket  instance in useref to stop rerendering of the component */

  const socketRef = useRef(null);

  //Number of reconnect attempt
  const reconnectAttemtRef = userRef(0);
  //Reconnt time id ref to clean the reconnect
  const reconnectTimePeriod = useRef();
  const isMountRef = useRef(false);
  //Connection establish
  const [isConnected, setConnection] = useState(false);

  const connect = useCallback(() => {
    //!Avoid Duplicacy
    if (
      socketRef.current &&
      (socketRef.current.readyState === WebSocket.OPEN ||
        socketRef.current.CONNECT)
    )
      return;
    const socket = new WebSocket(url);
    socketRef.current = socket;
    socket.onopen = () => {
      console.log("Web Socket Is Conncted");
      setConnection(true);
      /**Reset reset connection attempt */
      reconnectAttemtRef.current = 0;
    };

    //*Meesage recieved
    socket.onmessage = (event) => {
      console.log("Message from server", event.data);
    };

    //Handle close
    socket.onclose = () => {
      setConnection(false);
      if (!isMountRef.current) return;
      reconnect();
    };

    //Hanlde error
    socket.onerror = (error) => {
      console.log("Socket erro", error);
      /*
            ?Socket reconnect should be handle by onClose

            */
      socket.close();
    };
  }, [url]);

  const reconnect = useCallback(() => {
    const attempt = reconnectAttemtRef.current;
    const delay = Math.min(1000 * 2 ** attempt, 10000);
    reconnectTimePeriod.current = setTimeout(() => {
      if (!isMountRef) return;
      connect();
    }, delay);
  }, [connect]);

  const sendMessage = (message) => {
    if (
      socketRef.current &&
      (socketRef.current.readyState === WebSocket.OPEN ||
        socketRef.current.CONNECT)
    ) {
      socketRef.current.send(message);
    }
  };

  /**
   * Connect socket
   * clean the socket
   */

  useEffect(() => {
    isMountRef.current = true;
    connect();

    return () => {
      isMountRef.current = false;
      clearTimeout(reconnectTimePeriod.current);
      //Remove event
      if (socketRef.current) {
        socketRef.current.onopen = null;
        socketRef.current.onclose = null;
        socketRef.current.onerror = null;
        socketRef.current.onmessage = null;
      }
    };
  }, [connect]);

  return { isConnected, sendMessage };
}
