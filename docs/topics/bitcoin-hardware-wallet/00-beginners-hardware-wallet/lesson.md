---
title: Build a Bitcoin Hardware Wallet
last_updated: 2025-01-15
difficulty: beginner
duration: 120m
---

> 📅 **Looking for date/time/location?**  
> See the current [Event Page](./index.md)

# Bitcoin Hardware Wallet · Beginner Build

**Audience:** Curious builders with little-to-no embedded experience.

**Duration:** 2 hours (flexible)

**Outcomes:** By the end, students will:

* Recognize the security model of DIY hardware wallets versus commercial devices.
* Assemble a microcontroller-based signing device with a secure element.
* Flash open-source firmware and verify the build checksum.
* Sign and broadcast a testnet transaction using their new device.

---

## Abstract

Create a high-level summary for instructors describing how the class progresses, the key takeaways, and the philosophy behind building your own signing device.

---

## Concept Primer (15 min)

### Hardware Wallet Threat Model
Explain what threats hardware wallets mitigate, what remains in scope, and why air-gapped signing matters.

### Key Concepts
- Entropy generation and seed phrases
- Secure elements vs. general-purpose microcontrollers
- Firmware trust model and reproducible builds

---

## Lab Setup (10 min)

Outline the space, safety notes (soldering, electrostatic discharge), and how to stage kits before students arrive.

---

## Build Flow (45 min)

### Step 1 — Assemble Core Components
- Mount microcontroller and secure element breakout.
- Connect display, buttons, and power.

### Step 2 — Firmware Flashing
- Install toolchain (e.g., `dfu-util`, `esptool`).
- Flash the latest tagged release and verify checksum.

### Step 3 — Wallet Initialization
- Generate seed, record backup, and confirm PIN.

---

## Practice Signing (30 min)

Walk through creating a testnet transaction, signing it with the new device, and broadcasting via Sparrow or Specter.

---

## Troubleshooting Guide

Provide quick fixes for common hardware issues (bad solder joints, loose ribbon cables) and firmware hiccups (driver install, boot loops).

---

## Stretch Goals & Next Steps

- Integrate multisig support.
- Explore alternative firmware (e.g., Krux, SeedSigner forks).
- Harden the physical enclosure and tamper seals.

---

## Instructor Notes

- Time checkpoints for each section.
- Recommendations for assistant instructors.
- Follow-up resources for students (reading list, firmware repos, community chats).

---

> 📅 **Looking for date/time/location?**  
> See the current [Event Page](./index.md)
