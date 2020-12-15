A **register** is a hardware object in a processor core. Operations are performed by data sitting in registers. Assembly cannot use variables, so we have to reference registers.

A register has a delay before the output reflects the sampled input. That time is called the **clk-to-q** delay. In addition, the input that the register samples needs to be stable for a certain amount of time before the rising edge of the clock and a certain time after the rising edge of the clock. These are the **setup** and **hold** time, respectively.

The clk-to-q delay typically includes the hold time.

There are two conditions we care about for registers.

First, we want to make sure that the updates to a register aren't happening too quickly. When a clock cycle starts and a register begins saving its current input, the input should not change again. So the shortest path needs to take _at least_ as long as the hold time.

Here, $\text{paths}$ is the set of paths that go from logic gate to output or register.

\begin{equation}
t_{\mathsf{hold}} \leq \min_{\text{paths}}\left( t_{\mathsf{clk2q}} +  t_{\mathsf{logic}} \tag{Hold time constraint} \right)
\end{equation}

The clock period needs to be long enough for your new register input to be calculated correctly, which means that you need enough time for the longest path to finish and then to setup the register for updating.

\begin{equation}
t_{\mathsf{clk2q}} + \max_{\text{paths}} t_{\mathsf{logic}} + t_{\mathsf{setup}} \leq t_{\mathsf{clk-cycle}} \tag{Setup time constraint}
\end{equation}