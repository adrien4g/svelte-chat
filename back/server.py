import websockets
import asyncio

connected = set()

async def sendMsg(websocket, path):
    connected.add(websocket)
    print(connected)
    try:
        async for message in websocket:
            print(websocket)
            for con in connected:
                if con != websocket:
                    await con.send(message)
    except websockets.exceptions.ConnectionClosed as e:
        print('Client disconnected')

    finally:
        connected.remove(websocket)

    async for message in websocket:
        await websocket.send(message)

async def main():
    async with websockets.serve(sendMsg, "192.168.0.12", 3639):
        await asyncio.Future()

asyncio.run(main())
