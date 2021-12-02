# breakout-game-js
2D breakout game using pure JavaScript

Link to [online](https://adampaulukanis.github.io/breakout-game-js/) version.

## My laptop

My laptop is HP Compaq 6710b

```
OpenBSD 7.0 (GENERIC.MP) #232: Thu Sep 30 14:25:29 MDT 2021
    deraadt@amd64.openbsd.org:/usr/src/sys/arch/amd64/compile/GENERIC.MP
real mem = 1048248320 (999MB)
avail mem = 1000497152 (954MB)
random: good seed from bootblocks
mpath0 at root
scsibus0 at mpath0: 256 targets
mainbus0 at root
bios0 at mainbus0: SMBIOS rev. 2.4 @ 0xf2ab2 (25 entries)
bios0: vendor Hewlett-Packard version "68DDU Ver. F.20" date 12/01/2011
bios0: Hewlett-Packard HP Compaq 6710b (KE120ET#ABU)
acpi0 at bios0: ACPI 4.0
acpi0: sleep states S0 S3 S4 S5
acpi0: tables DSDT FACP SLIC HPET APIC MCFG TCPA SSDT SSDT SSDT SSDT SSDT SSDT
acpi0: wakeup devices C0B0(S5) C108(S3) C10F(S3) C110(S3) C111(S3) C119(S3) C11A(S3) C11B(S3) C131(S5) C2A1(S5) C132(S5) C137(S5) C134(S5) C2A2(S5) C23D(S5)
acpitimer0 at acpi0: 3579545 Hz, 24 bits
acpihpet0 at acpi0: 14318179 Hz
acpimadt0 at acpi0 addr 0xfee00000: PC-AT compat
cpu0 at mainbus0: apid 0 (boot processor)
cpu0: Intel(R) Core(TM)2 Duo CPU T8100 @ 2.10GHz, 2095.09 MHz, 06-17-06
cpu0: FPU,VME,DE,PSE,TSC,MSR,PAE,MCE,CX8,APIC,SEP,MTRR,PGE,MCA,CMOV,PAT,PSE36,CFLUSH,DS,ACPI,MMX,FXSR,SSE,SSE2,SS,HTT,TM,PBE,SSE3,DTES64,MWAIT,DS-CPL,VMX,EST,TM2,SSSE3,CX16,xTPR,PDCM,SSE4.1,NXE,LONG,LAHF,PERF,SENSOR,MELTDOWN
cpu0: 3MB 64b/line 8-way L2 cache
cpu0: smt 0, core 0, package 0
mtrr: Pentium Pro MTRR support, 8 var ranges, 88 fixed ranges
cpu0: apic clock running at 199MHz
cpu0: mwait min=64, max=64, C-substates=0.2.2.2.2.1.3, IBE
cpu1 at mainbus0: apid 1 (application processor)
cpu1: Intel(R) Core(TM)2 Duo CPU T8100 @ 2.10GHz, 2094.76 MHz, 06-17-06
cpu1: FPU,VME,DE,PSE,TSC,MSR,PAE,MCE,CX8,APIC,SEP,MTRR,PGE,MCA,CMOV,PAT,PSE36,CFLUSH,DS,ACPI,MMX,FXSR,SSE,SSE2,SS,HTT,TM,PBE,SSE3,DTES64,MWAIT,DS-CPL,VMX,EST,TM2,SSSE3,CX16,xTPR,PDCM,SSE4.1,NXE,LONG,LAHF,PERF,SENSOR,MELTDOWN
cpu1: 3MB 64b/line 8-way L2 cache
cpu1: smt 0, core 1, package 0
ioapic0 at mainbus0: apid 1 pa 0xfec00000, version 20, 24 pins, remapped
acpimcfg0 at acpi0
acpimcfg0: addr 0xf8000000, bus 0-63
acpiprt0 at acpi0: bus 0 (C003)
acpiprt1 at acpi0: bus 2 (C0B0)
acpiprt2 at acpi0: bus 8 (C11D)
acpiprt3 at acpi0: bus 16 (C131)
acpiprt4 at acpi0: bus 24 (C132)
acpiprt5 at acpi0: bus 40 (C134)
acpiec0 at acpi0
acpipci0 at acpi0 C003
"PNP0A06" at acpi0 not configured
tpm0 at acpi0 C280 addr 0x560/0x10
acpicmos0 at acpi0
"SYN0134" at acpi0 not configured
"HPQ0004" at acpi0 not configured
"HPQ0006" at acpi0 not configured
acpibat0 at acpi0: C23B model "Primary" serial 00510 2008/07/28 type LIon oem "Hewlett-Packard"
acpibat1 at acpi0: C23A not present
acpiac0 at acpi0: AC unit online
acpibtn0 at acpi0: C2BF
acpibtn1 at acpi0: C153
"PNP0C32" at acpi0 not configured
"PNP0C14" at acpi0 not configured
"PNP0C0B" at acpi0 not configured
"PNP0C0B" at acpi0 not configured
"PNP0C0B" at acpi0 not configured
"PNP0C0B" at acpi0 not configured
"PNP0C0B" at acpi0 not configured
acpicpu0 at acpi0: !C2(250@17 mwait.3@0x20), C1(1000@1 mwait.1), PSS
acpicpu1 at acpi0: !C2(250@17 mwait.3@0x20), C1(1000@1 mwait.1), PSS
acpipwrres0 at acpi0: C272, resource for C26D
acpipwrres1 at acpi0: C27F, resource for C273
acpipwrres2 at acpi0: C29B, resource for C299
acpipwrres3 at acpi0: C1C5, resource for C136
acpipwrres4 at acpi0: C3BC, resource for C3C1
acpipwrres5 at acpi0: C3BD, resource for C3C2
acpipwrres6 at acpi0: C3BE, resource for C3C3
acpipwrres7 at acpi0: C3BF, resource for C3C4
acpipwrres8 at acpi0: C3C0, resource for C3C5
acpitz0 at acpi0: critical temperature is 105 degC
acpitz1 at acpi0: critical temperature is 110 degC
acpitz2 at acpi0: critical temperature is 110 degC
acpitz3 at acpi0: critical temperature is 110 degC
acpivideo0 at acpi0: C098
acpivout0 at acpivideo0: C1AD
cpu0: Enhanced SpeedStep 2095 MHz: speeds: 2100, 1600, 1200, 800 MHz
pci0 at mainbus0 bus 0
pchb0 at pci0 dev 0 function 0 "Intel GM965 Host" rev 0x0c
inteldrm0 at pci0 dev 2 function 0 "Intel GM965 Video" rev 0x0c
drm0 at inteldrm0
intagp0 at inteldrm0
agp0 at intagp0: aperture at 0xd0000000, size 0x10000000
inteldrm0: apic 1 int 16, I965GM, gen 4
"Intel GM965 Video" rev 0x0c at pci0 dev 2 function 1 not configured
uhci0 at pci0 dev 26 function 0 "Intel 82801H USB" rev 0x03: apic 1 int 16
uhci1 at pci0 dev 26 function 1 "Intel 82801H USB" rev 0x03: apic 1 int 17
ehci0 at pci0 dev 26 function 7 "Intel 82801H USB" rev 0x03: apic 1 int 18
usb0 at ehci0: USB revision 2.0
uhub0 at usb0 configuration 1 interface 0 "Intel EHCI root hub" rev 2.00/1.00 addr 1
azalia0 at pci0 dev 27 function 0 "Intel 82801H HD Audio" rev 0x03: msi
azalia0: codecs: Analog Devices AD1981HD, AT&T/Lucent/0x1040, using Analog Devices AD1981HD
audio0 at azalia0
ppb0 at pci0 dev 28 function 0 "Intel 82801H PCIE" rev 0x03
pci1 at ppb0 bus 8
ppb1 at pci0 dev 28 function 1 "Intel 82801H PCIE" rev 0x03: msi
pci2 at ppb1 bus 16
wpi0 at pci2 dev 0 function 0 "Intel PRO/Wireless 3945ABG" rev 0x02: msi, MoW2, address 00:1f:3c:91:f9:a6
ppb2 at pci0 dev 28 function 2 "Intel 82801H PCIE" rev 0x03: msi
pci3 at ppb2 bus 24
bge0 at pci3 dev 0 function 0 "Broadcom BCM5787M" rev 0x02, BCM5754/5787 A2 (0xb002): msi, address 00:1f:29:ae:1a:68
brgphy0 at bge0 phy 1: BCM5787 10/100/1000baseT PHY, rev. 0
ppb3 at pci0 dev 28 function 4 "Intel 82801H PCIE" rev 0x03: msi
pci4 at ppb3 bus 40
uhci2 at pci0 dev 29 function 0 "Intel 82801H USB" rev 0x03: apic 1 int 20
uhci3 at pci0 dev 29 function 1 "Intel 82801H USB" rev 0x03: apic 1 int 21
uhci4 at pci0 dev 29 function 2 "Intel 82801H USB" rev 0x03: apic 1 int 18
ehci1 at pci0 dev 29 function 7 "Intel 82801H USB" rev 0x03: apic 1 int 20
usb1 at ehci1: USB revision 2.0
uhub1 at usb1 configuration 1 interface 0 "Intel EHCI root hub" rev 2.00/1.00 addr 1
ppb4 at pci0 dev 30 function 0 "Intel 82801BAM Hub-to-PCI" rev 0xf3
pci5 at ppb4 bus 2
cbb0 at pci5 dev 4 function 0 "Ricoh 5C476 CardBus" rev 0xb6: apic 1 int 16
"Ricoh 5C832 Firewire" rev 0x02 at pci5 dev 4 function 1 not configured
cardslot0 at cbb0 slot 0 flags 0
cardbus0 at cardslot0: bus 3 device 0 cacheline 0x0, lattimer 0x20
pcmcia0 at cardslot0
pcib0 at pci0 dev 31 function 0 "Intel 82801HBM LPC" rev 0x03
pciide0 at pci0 dev 31 function 1 "Intel 82801HBM IDE" rev 0x03: DMA, channel 0 configured to compatibility, channel 1 configured to compatibility
atapiscsi0 at pciide0 channel 0 drive 0
scsibus1 at atapiscsi0: 2 targets
cd0 at scsibus1 targ 0 lun 0: <HL-DT-ST, DVDRAM GSA-T40L, KC07> removable
cd0(pciide0:0:0): using PIO mode 4, DMA mode 2
pciide0: channel 1 ignored (disabled)
ahci0 at pci0 dev 31 function 2 "Intel 82801HBM AHCI" rev 0x03: msi, AHCI 1.1
ahci0: port 0: 3.0Gb/s
scsibus2 at ahci0: 32 targets
sd0 at scsibus2 targ 0 lun 0: <ATA, ST9120817AS, 3.AH> naa.5000c500100c0a5b
sd0: 114473MB, 512 bytes/sector, 234441648 sectors
usb2 at uhci0: USB revision 1.0
uhub2 at usb2 configuration 1 interface 0 "Intel UHCI root hub" rev 1.00/1.00 addr 1
usb3 at uhci1: USB revision 1.0
uhub3 at usb3 configuration 1 interface 0 "Intel UHCI root hub" rev 1.00/1.00 addr 1
usb4 at uhci2: USB revision 1.0
uhub4 at usb4 configuration 1 interface 0 "Intel UHCI root hub" rev 1.00/1.00 addr 1
usb5 at uhci3: USB revision 1.0
uhub5 at usb5 configuration 1 interface 0 "Intel UHCI root hub" rev 1.00/1.00 addr 1
usb6 at uhci4: USB revision 1.0
uhub6 at usb6 configuration 1 interface 0 "Intel UHCI root hub" rev 1.00/1.00 addr 1
isa0 at pcib0
isadma0 at isa0
pckbc0 at isa0 port 0x60/5 irq 1 irq 12
pckbd0 at pckbc0 (kbd slot)
wskbd0 at pckbd0: console keyboard
pms0 at pckbc0 (aux slot)
wsmouse0 at pms0 mux 0
wsmouse1 at pms0 mux 0
pms0: Synaptics touchpad, firmware 6.2, 0x2580b1 0x300000 0x0 0xa04793 0x0
pcppi0 at isa0 port 0x61
spkr0 at pcppi0
lpt0 at isa0 port 0x378/4 irq 7
dt: 445 probes
ugen0 at uhub2 port 1 "Broadcom Corp HP Integrated Module" rev 2.00/1.00 addr 2
ugen1 at uhub4 port 2 "AuthenTec Fingerprint Sensor" rev 1.10/6.23 addr 2
vscsi0 at root
scsibus3 at vscsi0: 256 targets
softraid0 at root
scsibus4 at softraid0: 256 targets
root on sd0a (56c300c55a869c3c.a) swap on sd0b dump on sd0b
drm:pid0:intel_cpu_fifo_underrun_irq_handler *ERROR* [drm] *ERROR* CPU pipe B FIFO underrun
inteldrm0: 1280x800, 32bpp
wsdisplay0 at inteldrm0 mux 1: console (std, vt100 emulation), using wskbd0
wsdisplay0: screen 1-5 added (std, vt100 emulation)
uhidev0 at uhub4 port 1 configuration 1 interface 0 "Logitech Wireless Receiver" rev 1.10/3.02 addr 3
uhidev0: iclass 3/1, 5 report ids
ums0 at uhidev0 reportid 1: 5 buttons, Z dir
wsmouse2 at ums0 mux 0
uhid0 at uhidev0 reportid 5: input=0, output=0, feature=7
```

