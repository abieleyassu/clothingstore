for port in {3000..3005}; do
  # Find the process ID (PID) running on the specified port
  pid=$(lsof -ti :$port)
  
  # Check if there's a process using that port
  if [ -n "$pid" ]; then
    echo "Killing process on port $port (PID: $pid)"
    kill -9 $pid
  else
    echo "No process found on port $port"
  fi
done
