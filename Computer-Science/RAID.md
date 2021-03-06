**RAID (Redundant Array of Inexpensive Disks)** "stripes" files multiple disks to create data redundancy, yielding high data availability at the cost of capacity and bandwidth.

|Level/Name|Configuration|Pro|Con|Picture|
|---------|---------|---|----|-----------|
|0|Split data across disks|No overhead|No redundancy|[[https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/RAID_0.svg/640px-RAID_0.svg.png|height=250px,align=center]]|
|1. Disk mirroring / shadowing |Mirrored disks carry extra copies|Fast read/recovery, some redundancy|High overhead|[[https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/RAID_1.svg/640px-RAID_1.svg.png|height=250px,align=center]]|
|2|Bit-level striping, one disk per parity group|Smaller overhead|Redundant check disks?|
|3. Parity disk|High I/O Rate parity|Byte-level striping|
|4. High I/O rate parity|Block-level striping with single parity disk|
|5. High I/O rate interleaved pairty|Block-level striping with parity distributed across disks|||[[https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/RAID_5.svg/800px-RAID_5.svg.png|height=250px,align=center]]|