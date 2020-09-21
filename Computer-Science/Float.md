A **float** is a datatype representing a real number with a "floating point." We have to specify the "energy" (the significant figures) and the exponent which floats the point appropriately. It's [[scientific notation]]. The standard is the IEEE 754 format.

In normalized form, the significand is treated as following a "1."


$$
(-1)^S \times (1 + \mathsf{Significand}) \times 2^{\mathsf{Exponent} - \mathsf{Bias}}, \quad \mathsf{Bias} = 127
$$

|Exponent|Significand|Object|
|--------|-----------|------|
|0|0|0|
|0|nonzero|???|
|1-254|anything| +/- floating point|
|255|0|+/- $\infty$|
|255|nonzero|???|

[[Floating-point arithmetic]]