The **linear quadratic regulator (LQR)** models a system using

$$
\dot{x}_t = Ax_t + Bu_t\\,.
$$

The cost is given by

$$
J_{\text{LQR}}=\int_{0}^{\infty} (x_t^\mathsf{T} Qx_t + u_t^\mathsf{T} Ru_t) dt
$$

The optimal policy is given by

$$
u_t = -Kx_t
$$