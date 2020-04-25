A **linear-quadratic regulator (LQR)** where we assume linear dynamics and a quadratic cost.

$$
\min_{\vec{x}_t, \vec{u}_t} \sum_{t=0}^{N-1} \frac{1}{2}\left(\vec{x}_t^\top Q \vec{x}_t + \vec{u}_t^\top R \vec{u}_t\right) + \frac{1}{2}\vec{x}_N^\top Q_f\vec{x}_N
$$