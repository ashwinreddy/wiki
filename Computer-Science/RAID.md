**RAID (Redundant Array of Inexpensive Disks)** "stripes" files multiple disks to create data redundancy, yielding high data availability at the cost of capacity and bandwidth.

|Level|Configuration|Pro|Con|
|-----|-------------|---|----|
|RAID0|Split data across disks|No overhead|No redundancy|
|RAID1|Mirrored disks carry extra copies|Fast read/recovery, some redundancy|High overhead|
|RAID2|Bit-level striping, one disk per parity group|Smaller overhead|Redundant check disks?|
|RAID3|Byte-level striping|
|RAID4|Block-level striping with single parity disk|
|RAID5|Block-level striping with parity distributed across disks|