**Average memory acces time**

$$
\text{AMAT} = \text{Hit Time} + \text{Miss Rate}\times\text{Miss Penalty}
$$

In a multi-level cache, there are two types of miss rates that we consider for each level.

Global
: Calculated as the number of accesses that missed at that level divided by the total number of accesses _to the cache system_.

Local
: Calculated as the number of accesses that missed at that level divided by the total number of accesses _to that cache level_.