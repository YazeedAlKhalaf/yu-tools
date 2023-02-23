<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import ThemeButton from "$lib/components/ThemeButton.svelte";
  import robot from "$lib/images/robot.png";
  import robot_dark from "$lib/images/robot-dark.png";
  import ToolCard from "$lib/components/ToolCard.svelte";
</script>

<svelte:head>
  <title>YU Tools</title>
  <meta
    name="description"
    content="Tools for the students of Al Yamamah Unversity!"
  />
</svelte:head>

<div>
  <ThemeButton />

  <!-- hero section -->
  <section
    class="flex flex-col-reverse md:flex-row items-center justify-center mb-16 md:mb-0 min-h-screen"
  >
    <div class="text-center">
      <h1 class="text-orange font-bold text-4xl md:text-6xl">YU Tools</h1>
      <p class="text-xl md:text-2xl pb-2">
        The hammer and the drill<br />you’ve always dreamt of!
      </p>
      <Button text="View Tools" leadingIcon="bi:tools" onClick={() => {}} />
    </div>
    <img class="w-96" src={robot_dark} alt="robot with glow behind it" />
  </section>

  <!-- featured tools section -->
  <section class="pb-12">
    <h1 class="text-orange font-bold text-5xl text-center mb-4">
      Featured Tools
    </h1>
    <div
      class="flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-5 px-8 md:px-0 mb-4"
    >
      <ToolCard
        imageSrc="https://i.ibb.co/8YNQbWt/header-image.png"
        imageAlt="tuwaiq classrooms website header"
        title="Tuwaiq Classrooms"
        description="This project is a collaboration between the IEC and the GDSC YU clubs."
        gituhbLink="https://github.com/GDSC-YU/tuwaiq-classrooms"
        websiteLink="https://tc.gdscyu.com"
      />
      <ToolCard
        imageSrc="https://i.ibb.co/rxCQmH1/header-image-2.png"
        imageAlt="al yamamah semester progress website header"
        title="YU Semester Progress"
        description="Tells you the progress of the semester in YU and lets you search the calendar!"
        gituhbLink="https://github.com/YazeedAlKhalaf/alyamamah-semester-progress"
        websiteLink="https://alyamamah-semester-progress.netlify.app/"
      />
      <ToolCard
        imageSrc="https://i.ibb.co/hm68SQW/header-image-2.png"
        imageAlt="al yamamah app logo header"
        title="Al Yamamah app"
        description="This project is made by Yazeed AlKhalaf, it is a fancy looking EduGate mobile app."
        gituhbLink=""
        appStoreLink=""
        googlePlayLink=""
      />
    </div>
    <div class="flex flex-row justify-center">
      <Button
        text="See more"
        trailingIcon="material-symbols:arrow-right-alt-rounded"
        onClick={() => {}}
      />
    </div>
  </section>

  <!-- featured tools section -->
  <section>
    <h1 class="text-orange font-bold text-5xl text-center">
      Wanna add your tool?
    </h1>
  </section>
</div>
