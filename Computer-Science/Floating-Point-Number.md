In the 1940s, Konrad Zuse's Z4 was the first commercial computer to use floating point numbers.

In 1985, the IEEE-754 standardized floating point numbers.

How will most contemporary systems handle the float representation of $\sqrt{-1}$ and $\sin^{-1}(2)$, and what is the structure of the bit pattern for that representation? They will call them NaNs (not a number). The exponent bits will have all 1s and the significant will have a nonzero value.

How would most contemporary floating point libraries handle the value of $\tan(\pi/2)$, and what is the structure of the bit pattern for that representation? They would call it positive infinity. The sign bit would be 0, the exponent would have all 1s, and the significand would be all 0s.

How do the floating point representations of $\sin(0)$ and $\sin(\pi)$ differ? The first bit (sign bit) would be 0 for $\sin(0)$ and 1 for $\sin(\pi)$