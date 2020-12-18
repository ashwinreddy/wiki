**Hamming(7,4)** is a [[Hamming code]] for 4 bits of data with 3 bits. Let's say the data bits are $abcd$ and the parity bits are $xyz$. Then you would transmit $xyazbc$. To verify the validity, you would run the equations

\begin{gather}
x = a \oplus b \oplus d \\\\
y = a \oplus c \oplus d \\\\
z = b \oplus c \oplus d \\\\
\end{gather}