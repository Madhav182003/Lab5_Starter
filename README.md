# Lab 5 - Starter
## Madhav Bansal

1. No, I would not use a unit test for the full “message” feature because it likely involves multiple components — including UI interaction, network communication, and backend logic — which go beyond the scope of a unit test. This would be better suited for integration or end-to-end testing to ensure that the entire message is sent and received correctly.

2. Yes, I would use a unit test for the “max message length” feature because it’s a simple and isolated logic check. It can be tested independently by passing strings of various lengths and verifying whether the logic correctly prevents messages longer than 80 characters. This is exactly what unit tests are meant for — testing small, individual units of functionality.
