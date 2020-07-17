A generic optimal control problem is 

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
  <mtable columnalign="left left" rowspacing="4pt" columnspacing="1em">
    <mtr>
      <mtd>
        <msub>
          <mstyle displaystyle="false" scriptlevel="0">
            <mtext>maximize</mtext>
          </mstyle>
          <mrow class="MJX-TeXAtom-ORD">
            <msub>
              <mi>u</mi>
              <mi>t</mi>
            </msub>
          </mrow>
        </msub>
      </mtd>
      <mtd>
        <msub>
          <mrow class="MJX-TeXAtom-ORD">
            <mi mathvariant="double-struck">E</mi>
          </mrow>
          <mrow class="MJX-TeXAtom-ORD">
            <msub>
              <mi>e</mi>
              <mi>t</mi>
            </msub>
          </mrow>
        </msub>
        <mo stretchy="false">[</mo>
        <munderover>
          <mo>&#x2211;<!-- ∑ --></mo>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>t</mi>
            <mo>=</mo>
            <mn>0</mn>
          </mrow>
          <mi>N</mi>
        </munderover>
        <msub>
          <mi>R</mi>
          <mi>t</mi>
        </msub>
        <mo stretchy="false">[</mo>
        <msub>
          <mi>x</mi>
          <mi>t</mi>
        </msub>
        <mo>,</mo>
        <msub>
          <mi>u</mi>
          <mi>t</mi>
        </msub>
        <mo stretchy="false">]</mo>
        <mo stretchy="false">]</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd>
        <mstyle displaystyle="false" scriptlevel="0">
          <mtext>subject to</mtext>
        </mstyle>
      </mtd>
      <mtd>
        <msub>
          <mi>x</mi>
          <mrow class="MJX-TeXAtom-ORD">
            <mi>t</mi>
            <mo>+</mo>
            <mn>1</mn>
          </mrow>
        </msub>
        <mo>=</mo>
        <mi>f</mi>
        <mo stretchy="false">(</mo>
        <msub>
          <mi>x</mi>
          <mi>t</mi>
        </msub>
        <mo>,</mo>
        <msub>
          <mi>u</mi>
          <mi>t</mi>
        </msub>
        <mo>,</mo>
        <msub>
          <mi>e</mi>
          <mi>t</mi>
        </msub>
        <mo stretchy="false">)</mo>
      </mtd>
    </mtr>
    <mtr>
      <mtd />
      <mtd>
        <mstyle displaystyle="false" scriptlevel="0">
          <mtext>(</mtext>
          <mrow class="MJX-TeXAtom-ORD">
            <msub>
              <mi>x</mi>
              <mn>0</mn>
            </msub>
          </mrow>
          <mtext>&#xA0;given).</mtext>
        </mstyle>
      </mtd>
    </mtr>
  </mtable>
</math>