**Linear quadratic regulator (LQR)**

# Continuous time

With system

$$
\dot{x}_t = Ax_t + Bu_t\,.
$$

The goal is to minimize the cost

$$
J_{\text{LQR}}=\int_{0}^{\infty} (x_t^\top Qx_t + u_t^\top Ru_t) dt
$$


www.argmin.net/2020/07/08/gain-margin