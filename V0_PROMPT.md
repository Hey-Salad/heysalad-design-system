# v0 Prompt: HeySalad OS Vision

Use this repository as the design source of truth for a B2B camera operations interface called **HeySalad OS Vision**.

Build a Vercel/Next.js interface that uses the HeySalad brand tokens, fonts, logos, spacing, and component style from this repo. The product should feel like a serious B2B operations console, not a consumer camera app.

Primary screen:
- Dark HeySalad OS shell with a left sidebar.
- Main focus is a live AI camera stream panel.
- Show device status, uptime, signal, temperature, firmware, and last heartbeat.
- Show AI detections, incidents, confidence scores, and event timeline.
- Include controls for snapshots, recording, camera restart, rule testing, and incident export.
- Include an assistant composer called “Ask HeySalad” for querying camera events, device health, and operational reports.

Sidebar:
- Live Cameras
- Incidents
- Sites
- Devices
- AI Rules
- Reports
- Integrations
- Admin

Backend assumptions:
- Frontend deploys on Vercel.
- AWS is used for the hackathon backend/database layer.
- ESP32-S3 / DFRobot camera devices send heartbeats, snapshots, and detection events.
- The UI should be ready to connect to DynamoDB or Aurora later, but can use realistic mock data for the first v0 draft.

Design direction:
- Use HeySalad Cherry Red for critical actions and alerts.
- Use restrained dark surfaces for the OS shell.
- Keep text compact, scannable, and operational.
- Avoid marketing-page layout. Build the actual product screen first.
