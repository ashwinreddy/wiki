**RAID (Redundant Array of Inexpensive Disks)** "stripes" files multiple disks to create data redundancy, yielding high data availability at the cost of capacity and bandwidth.

|Level|Name|Configuration|Pro|Con|Picture|
|-----|----|---------|---|----|-----------|
|RAID0||Split data across disks|No overhead|No redundancy|
|RAID1|Disk mirroring / shadowing |Mirrored disks carry extra copies|Fast read/recovery, some redundancy|High overhead|[[https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/RAID_1.svg/640px-RAID_1.svg.png|height=250px,align=center]]|
|RAID2||Bit-level striping, one disk per parity group|Smaller overhead|Redundant check disks?|
|RAID3|Parity disk|High I/O Rate parity|Byte-level striping|
|RAID4|High I/O rate parity|Block-level striping with single parity disk|
|RAID5|High I/O rate interleaved pairty|Block-level striping with parity distributed across disks|



[[https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/RAID_5.svg/800px-RAID_5.svg.png|height=250px,align=center]]