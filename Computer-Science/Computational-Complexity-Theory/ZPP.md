**Zero-Error Probabilistic Polytime (ZPP)** is a [[complexity class]] which consists of Las Vegas algorithms which run in expected polynomial time.

If a problem has a ZPP algorithm $Z$, it has a RP algorithm. Run $Z$ for at least double its expected running time. Return an answer if you get one, otherwise say NO.

$$
\mathbb{P}(\text{run time} \geqslant 2\cdot \mathbb{E}[\text{run time}]) \geqslant \frac{\mathbb{E}[\text{run time}]}{2 \mathbb{E}[\text{run time}]} 
$$

$$
\mathbb{P}\left(\text{yield an answer before stopping}\right) \geqslant \frac{1}{2}
$$