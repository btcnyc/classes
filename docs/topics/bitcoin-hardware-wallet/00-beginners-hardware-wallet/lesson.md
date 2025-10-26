---
title: Build a Bitcoin Hardware Wallet
last_updated: 2025-01-15
difficulty: beginner
duration: 120m
---

> 📅 **Looking for date/time/location?**  
> See the current [Event Page](./index.md)

![DIY hardware wallet build on a workbench](../assets/hardware_wallet.webp){ width="100%" }

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
Hardware wallets exist to solve a fundamental problem: how do you sign Bitcoin transactions without exposing your private keys to an internet-connected computer that could be compromised by malware or remote attackers? The core threat model assumes your everyday laptop or phone is potentially hostile. A hardware wallet creates an isolated environment where private keys never leave the device, and transaction signing happens in a secure element or microcontroller that only communicates the signature back to the host computer, not the key itself. Even if your computer is completely compromised, an attacker can't steal your Bitcoin without physical access to the device and your PIN.

However, hardware wallets introduce their own threats. You must trust the manufacturer hasn't introduced backdoors, the supply chain hasn't been tampered with, and the random number generation is truly random. Physical attackers might extract keys through side-channel attacks or chip manipulation, and someone with temporary access could modify your device. Building your own hardware wallet helps you understand these tradeoffs—you'll make decisions about secure elements versus general-purpose microcontrollers, how to verify transactions on a display, and how to protect against both remote and physical threats. The goal isn't perfect security, but understanding which threats you're protecting against and which ones remain.

### Key Concepts
- **Entropy and seed phrases:** Your wallet is only as safe as the randomness that births it. We will mix the device's random number generator with human-friendly tricks like dice rolls, convert that entropy into a 12- or 24-word [BIP39 phrase](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki), and leave the room with a written or metal backup you trust.
- **Seed phrase hygiene:** Treat the seed like master keys to your savings. Never type the words into a phone or computer—keyloggers, screenshots, and cloud backups can leak it forever. Keep the phrase offline, store it somewhere only you can access, and practice reading it back aloud before you leave.
- **Secure element + microcontroller:** Think of the secure element as the vault and the microcontroller as the brains. The secure element guards private keys with tamper resistance, while the microcontroller handles the screen, buttons, and firmware logic. Building both together teaches you the security benefits *and* the debugging trade-offs of each chip.
- **Trusting firmware:** Firmware is the invisible operating system of the wallet. Always download from tagged releases, check the published hash, and understand that reproducible builds let multiple people compile the same code and arrive at the exact same binary. If the checksum does not match, you do not sign.

---

## What Are We Building? 
We are taking generic hardware, the LilyGo T-Display, and flashing Jade SDK firmware on it. The [Jade Plus](https://blockstream.com/jade/jade-plus/) is an open-source wallet, which typically costs $150:

![Blockstream Jade Plus hardware wallet](../assets/blockstream_jade_plus.webp)

Today, we'll be flashing their firmware onto a $15 hardware instead.

### What to Buy

![LilyGO T-Display development board](../assets/LILYGO-T-DISPLAY.jpg){ width="70%" }

- **LilyGO T-Display (16MB with shell, model K164)** — [Order direct from LilyGO](https://lilygo.cc/products/t-display?srsltid=AfmBOornob5U3FzZifuSwBBOdeXKcdPDqkYEnAVYKBLdzl0BPyNglGBR) for about $15. This ESP32 board provides the display, buttons, and USB interface that mirror Blockstream's Jade Plus. The onboard ESP32 also includes Wi-Fi and Bluetooth radios; we'll ship firmware that keeps them disabled, but they shape your threat model because malicious code could switch them back on.
- **USB-C cable** — Bring a data-capable cable so you can flash firmware and power the board straight from your laptop (totally fine for class use).

### Why Build Your Own Hardware Wallet?

- Save roughly $135 versus buying a commercial device.
- Build comfort with firmware flashing, secure elements, and wallet hygiene.
- Spin up additional signing devices to spread savings across multiple wallets.
- Reduce supply chain risk by sourcing and assembling every component yourself.
- Keep Lopp's mantra in mind: sovereignty and convenience are always at odds.

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
