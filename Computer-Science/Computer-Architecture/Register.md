A **register** is a hardware object in a processor core. Operations are performed by data sitting in registers. Assembly cannot use variables, so we have to reference registers.

A register has a delay before the output reflects the sampled input. That time is called the **clk-to-q** delay. In addition, the input that the register samples needs to be stable for a certain amount of time before the rising edge of the clock and a certain time after the rising edge of the clock. These are the **setup** and **hold** time, respectively.

The clk-to-q delay typically includes the hold time.