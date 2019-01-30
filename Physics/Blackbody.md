A **blackbody** is a complex object, simply anything but a gas, that absorbs all electromagnetic energy and radiates it out. The blackbody has what is variously called a blackbody, Planck, continuous, or thermal spectrum. Its absorbance properties also mean that it does not transmit (allow any light to pass through it) or reflect (bounce back any light). The blackbody also obeys Wien's law and the Stefan-Boltzmann law.



The term blackbody is kind of a misnomer. A blackbody will still radiate, just not in the visible light spectrum.

An idealized blackbody would absorb all electromagnetic energy. As a result, it would heat up and emit an equal amount of energy, assuming it is in thermal equilibrium. Because of these properties, it would look black. It would not reflect light because it absorbs everything. Nor would it transmit.

A mirror is not a very good black body, but they still absorb some energy. Windows and glass are also not very good black bodies.

Blackbodies have a constant temperature if their absorbance is constant.

Humans and chairs are reasonably good blackbodies. 

Blackbodies would look black.

Stars are decent blackbodies (not great though) because they are not in thermal equilibrium with their surroundings.

The quality of the material as an absorber is indicative of its quality as an emitter.

# Applications

An infrared thermometer uses a Planck spectrum and Wein's law to determine temperature.

# Goldilocks Zone

Goldilocks zone
: The region some distance away from a star where liquid water can exist

Let us imagine that there is a spherical star with some radius $R_{\odot}$ and temperature $T_{\odot}$ and then a planet some distance $d$ away with a radius $r_p$. We can pretend like the planet is like a point compared to the star so we can avoid doing steradians. Also, note that only the half of the planet facing the star will actually absorb the energy. 

\begin{gather}
L_{\odot} = \Phi_{\odot}\cdot 4 \pi R_{\odot}^2 \\\
\Phi_{\odot} = \sigma T_{\odot}^4 \\\
\frac{\pi r_p^2}{4\pi d^2} = f \\\
\Phi_p = \frac{L_{\odot} f}{4 \pi r_p^2} \\\
\Phi_p = \sigma T_p^4\\\
T_p^4 = \frac{1}{\sigma}\frac{1}{4\pi r_p^2}\frac{\pi r_p^2}{4\pi d^2}\cdot 4 \pi R_{\odot}^2 \cdot \sigma T_{\odot}^4 \\\
T_p^4 = \frac{1}{4}\frac{1}{d^2} R_{\odot}^2 T_{\odot}^4 \\\
T_p^2 = \frac{R_{\odot}T_{\odot}^2}{2d} \\\
\boxed{T_p = T_{\odot} \sqrt{\frac{R_{\odot}}{2d}}}
\end{gather}

However, we are not accounting for reflection or the planet's atmosphere. So this might not be a great estimate for everything, but it could work for the moon, for example.

# Solar Sails

Planck realized that if $E = h \nu$ then one could find momentum using dimensional analysis as

\begin{equation}
p = \frac{h}{\lambda}
\end{equation}

There's a derived constant 

\begin{equation}
\hbar \equiv \frac{h}{2\pi}
\end{equation}

which lets us say that $E = \hbar \omega$ and $p=\hbar k$ where $k$ is the wavenumber. Also, $c = \lambda \nu$.

So let's imagine that light from the sun is hitting a sail. The momentum from the light transfers to the sail, making it move.

\begin{gather}
P = \frac{dE}{dt} \\\
E = pc \\\
\frac{\Delta E}{\Delta t} = \frac{c\Delta p}{\Delta t} \\\
p = Fc \\\
F = \frac{p}{c} \\\
F = \frac{\sigma T^4 \pi R^2 r^2}{cd^2} \\\
\text{Power} = f \cdot L_{\odot} \\\
L_{\odot} = \sigma T^4 \cdot 4 \pi R_{\odot}^2
\end{gather}

