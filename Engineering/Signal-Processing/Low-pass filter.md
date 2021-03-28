A **low-pass filter** allows low frequency signals to pass through. An ideal low-pass would look like

$$
\Pi\left(\frac{\omega - \frac{\omega_c}{2}}{\omega_c}\right)
$$

# [[RC circuit]]

The transfer function for the voltage over the capacitor is

$$
H_c(\omega) = \frac{V_C}{V_S} = {\frac{1}{\iota \omega C} \over R + \frac{1}{\iota\omega C}} = \frac{1}{1 + \iota\omega RC}
$$


$$
|H_c(\omega)| = \frac{1}{|1 + \iota\omega RC|} = \frac{1}{\sqrt{1 + \omega^2 R^2 C^2}}
$$

![](https://lh3.googleusercontent.com/proxy/voBKaT1DE3yonz9Ajadn2pbbr9inaYvQVSJP3BurqdDLn_BpJXgLK7JlBFjq27Gj8_eCl5TmYZdpAvCx7Cmfx_iIREQxHbI4V7unA3Nomrn-MfocLPS_9bIyng)