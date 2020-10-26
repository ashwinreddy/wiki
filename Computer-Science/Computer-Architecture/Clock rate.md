The **clock rate** tells us how many operations can be performed in a second.

$$
\text{Clock frequency} = \frac{1}{\text{Cycle time}}
$$

How do we find it? We look for the longest path in our circuit, (from register to register or just pure combinational logic). A path with a register will take at least the setup time plus the clk to q time, and then you include all the combinational logic.