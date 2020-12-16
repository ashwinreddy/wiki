**Physical address**. The address is similar in format to a [[virtual address|virtual address space]]:

|Physical page number (PPN) |Page offset|
|------------------|-----------|

The page offset is shared between the two, but 

$$
\text{PPN bits} = \lg \text{Physical Address Space} - \text{Offset bits}
$$

where 

$$
\text{Offset bits} = \lg \frac{\text{Bytes}}{\text{Page}}
$$