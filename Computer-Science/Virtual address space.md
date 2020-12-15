The **virtual address space** is the set of virtual addresses. A virtual address looks like


|Virtual page number (VPN) |Page offset|
|------------------|-----------|

$$
\text{Offset bits} = \lg \frac{\text{Bytes}}{\text{Page}}
$$

$$
\text{Offset bits} + \text{VPN bits} = \text{VA bits}
$$


The virtual address will usually be longer than the physical address.