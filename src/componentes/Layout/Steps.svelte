<script>
  import StepWizard from "svelte-step-wizard";
  import { Steps } from "svelte-steps";
  import Padron from "../../pages/padron/Padron.svelte";
  import Tramite from "../../pages/tramite/Tramite.svelte"
 

  let steps = [
    { text: "Seleccione el tramite" },
    { text: "Complete sus datos" },
    { text: "Elija su turno" },
  ];

  let current = 0;
  let last = 2;

  const onClick = (e) => {
    current = e.detail.current;
    last = e.detail.last;
  };

  const nextStepBar = () => {
    current = current + 1;
    console.log(current);
  };
  function prevStepBar() {
    current -= 1;
  }
</script>

<div
  class="row card col-md-8 shadow-sm justify-content-center mt-5 mb-5 rounded mx-auto"
>
  <div class="card-body">
    <Steps
      on:click={onClick}
      {current}
      {steps}
      primary="#6ea549 "
      secondary="#919aa1"
      clickable={false}
    />

    <StepWizard initialStep={1}>
      <StepWizard.Step num={1} let:nextStep>
        <Tramite />
        <button
          on:click={() => {
            nextStep();
            nextStepBar();
          }}
          class="btn btn-md btn-success rounded-pill position-absolute bottom-0 end-0 mb-2 me-2"
          disabled={current === steps.length - 1}
        >
          Siguiente
        </button>
      </StepWizard.Step>

      <StepWizard.Step num={2} let:previousStep let:nextStep>
         <Padron />
        <button
          on:click={() => {
            previousStep();
            prevStepBar();
          }}
          class="btn btn-md btn-success rounded-pill"
        >
        Anterior
        </button>

        <button
          on:click={() => {
            nextStep();
            nextStepBar();
          }}
          class="btn btn-md btn-success rounded-pill position-absolute bottom- end-0 mb-2 me-2"
          disabled={current === steps.length - 1}
        >
        Siguiente
        </button>
      </StepWizard.Step>

      <StepWizard.Step num={3} let:previousStep>
        <p>Final</p>
        <button
          on:click={() => {
            previousStep();
            prevStepBar();
          }}
          class="btn btn-md btn-success rounded-pill"
        >
        Anterior
        </button>
      </StepWizard.Step>
    </StepWizard>
  </div>
</div>
