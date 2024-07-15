const TRANSLATIONS = {
  common: {
    "workspaces-name": "Nom des espaces de travail",
    error: "erreur",
    success: "succès",
    user: "Utilisateur",
    selection: "Sélection du modèle",
    saving: "Enregistrement...",
    save: "Enregistrer les modifications",
    previous: "Page précédente",
    next: "Page suivante",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "Paramètres de l'instance",
    system: "Préférences système",
    invites: "Invitation",
    users: "Utilisateurs",
    workspaces: "Espaces de travail",
    "workspace-chats": "Chat de l'espace de travail",
    customization: "Apparence",
    "api-keys": "Clés API",
    llm: "Préférence LLM",
    transcription: "Modèle de transcription",
    embedder: "Préférences d'intégration",
    "text-splitting": "Diviseur de texte et découpage",
    "voice-speech": "Voix et Parole",
    "vector-database": "Base de données vectorielle",
    embeds: "Widgets de chat intégrés",
    "embed-chats": "Historique des chats intégrés",
    security: "Sécurité",
    "event-logs": "Journaux d'événements",
    privacy: "Confidentialité et données",
    "ai-providers": "Fournisseurs d'IA",
    "agent-skills": "Compétences de l'agent",
    admin: "Admin",
    tools: "Outils",
    "experimental-features": "Fonctionnalités Expérimentales",
    contact: "Contacter le Support",
  },

  // Page Definitions
  login: {
    "multi-user": {
      welcome: "Bienvenue à",
      "placeholder-username": "Nom d'utilisateur",
      "placeholder-password": "Mot de passe",
      login: "Connexion",
      validating: "Validation...",
      "forgot-pass": "Mot de passe oublié",
      reset: "Réinitialiser",
    },
    "sign-in": {
      start: "Connectez-vous à votre",
      end: "compte.",
    },
    "password-reset": {
      title: "Réinitialisation du mot de passe",
      description:
        "Fournissez les informations nécessaires ci-dessous pour réinitialiser votre mot de passe.",
      "recovery-codes": "Codes de récupération",
      "recovery-code": "Code de récupération {{index}}",
      "back-to-login": "Retour à la connexion",
    },
  },

  welcomeMessage: {
    part1:
      "Bienvenue sur AnythingLLM, un outil d'intelligence artificielle open-source créé par Mintplex Labs qui transforme n'importe quoi en un chatbot entraîné avec lequel vous pouvez interroger et discuter. AnythingLLM est un logiciel BYOK (apportez vos propres clés), il n'y a donc pas d'abonnement, de frais ou de charges pour ce logiciel en dehors des services que vous souhaitez utiliser.",
    part2:
      "AnythingLLM est le moyen le plus simple de regrouper des produits d'intelligence artificielle puissants tels que OpenAi, GPT-4, LangChain, PineconeDB, ChromaDB et d'autres services dans un package soigné, sans tracas, pour augmenter votre productivité de 100x.",
    part3:
      "AnythingLLM peut fonctionner totalement localement sur votre machine avec peu d'impact, vous ne remarquerez même pas qu'il est là ! Pas besoin de GPU. L'installation en cloud et sur site est également disponible.\nL'écosystème des outils d'IA devient plus puissant chaque jour. AnythingLLM le rend facile à utiliser.",
    githubIssue: "Créer un problème sur Github",
    user1: "Comment commencer?!",
    part4:
      'C\'est simple. Toutes les collections sont organisées en compartiments que nous appelons "Workspaces". Les Workspaces sont des compartiments de fichiers, documents, images, PDFs et autres fichiers qui seront transformés en quelque chose que les LLM peuvent comprendre et utiliser dans une conversation.\n\nVous pouvez ajouter et supprimer des fichiers à tout moment.',
    createWorkspace: "Créez votre premier workspace",
    user2:
      "Est-ce comme un Dropbox IA ou quelque chose comme ça ? Et le chat ? C'est bien un chatbot, non ?",
    part5:
      "AnythingLLM est plus qu'un Dropbox plus intelligent.\n\nAnythingLLM offre deux façons de parler avec vos données:\n\n<i>Interrogation :</i> Vos chats renverront des données ou des inférences trouvées avec les documents dans votre workspace auquel il a accès. Ajouter plus de documents au workspace le rend plus intelligent !\n\n<i>Conversationnel :</i> Vos documents et votre historique de chat en cours contribuent tous deux aux connaissances du LLM en même temps. Idéal pour ajouter des informations en temps réel basées sur du texte ou des corrections et des malentendus que le LLM pourrait avoir.\n\nVous pouvez basculer entre les deux modes <i>en plein milieu d'une conversation !</i>",
    user3: "Wow, cela semble incroyable, laissez-moi l'essayer tout de suite !",
    part6: "Amusez-vous bien !",
    starOnGithub: "Étoile sur GitHub",
    contact: "Contacter Mintplex Labs",
  },

  "new-workspace": {
    title: "Nouveau Espace de Travail",
    placeholder: "Mon Espace de Travail",
  },

  // Workspace Settings menu items
  "workspaces—settings": {
    general: "Paramètres généraux",
    chat: "Paramètres de chat",
    vector: "Base de données vectorielle",
    members: "Membres",
    agent: "Configuration de l'agent",
  },

  // General Appearance
  general: {
    vector: {
      title: "Nombre de vecteurs",
      description:
        "Nombre total de vecteurs dans votre base de données vectorielle.",
    },
    names: {
      description:
        "Cela ne changera que le nom d'affichage de votre espace de travail.",
    },
    message: {
      title: "Messages de chat suggérés",
      description:
        "Personnalisez les messages qui seront suggérés aux utilisateurs de votre espace de travail.",
      add: "Ajouter un nouveau message",
      save: "Enregistrer les messages",
      heading: "Expliquez-moi",
      body: "les avantages de Mr.🆖 DocChat",
    },
    pfp: {
      title: "Image de profil de l'assistant",
      description:
        "Personnalisez l'image de profil de l'assistant pour cet espace de travail.",
      image: "Image de l'espace de travail",
      remove: "Supprimer l'image de l'espace de travail",
    },
    delete: {
      title: "Supprimer l'Espace de Travail",
      description:
        "Supprimer cet espace de travail et toutes ses données. Cela supprimera l'espace de travail pour tous les utilisateurs.",
      delete: "Supprimer l'espace de travail",
      deleting: "Suppression de l'espace de travail...",
      "confirm-start": "Vous êtes sur le point de supprimer votre",
      "confirm-end":
        "espace de travail. Cela supprimera toutes les intégrations vectorielles dans votre base de données vectorielle.\n\nLes fichiers source originaux resteront intacts. Cette action est irréversible.",
    },
  },

  // Chat Settings
  chat: {
    llm: {
      title: "Fournisseur LLM de l'espace de travail",
      description:
        "Le fournisseur et le modèle LLM spécifiques qui seront utilisés pour cet espace de travail. Par défaut, il utilise le fournisseur et les paramètres LLM du système.",
      search: "Rechercher tous les fournisseurs LLM",
    },
    model: {
      title: "Modèle de chat de l'espace de travail",
      description:
        "Le modèle de chat spécifique qui sera utilisé pour cet espace de travail. Si vide, utilisera la préférence LLM du système.",
      wait: "-- en attente des modèles --",
    },
    mode: {
      title: "Mode de chat",
      chat: {
        title: "Chat",
        "desc-start":
          "fournira des réponses avec les connaissances générales du LLM",
        and: "et",
        "desc-end": "le contexte du document trouvé.",
      },
      query: {
        title: "Requête",
        "desc-start": "fournira des réponses",
        only: "uniquement",
        "desc-end": "si un contexte de document est trouvé.",
      },
    },
    history: {
      title: "Historique des chats",
      "desc-start":
        "Le nombre de chats précédents qui seront inclus dans la mémoire à court terme de la réponse.",
      recommend: "Recommandé: 20.",
      "desc-end":
        "Tout nombre supérieur à 45 risque de provoquer des échecs de chat continus en fonction de la taille du message.",
    },
    prompt: {
      title: "Invite",
      description:
        "L'invite qui sera utilisée sur cet espace de travail. Définissez le contexte et les instructions pour que l'IA génère une réponse. Vous devez fournir une invite soigneusement conçue pour que l'IA puisse générer une réponse pertinente et précise.",
    },
    refusal: {
      title: "Réponse de refus en mode requête",
      "desc-start": "En mode",
      query: "requête",
      "desc-end":
        ", vous pouvez souhaiter retourner une réponse de refus personnalisée lorsque aucun contexte n'est trouvé.",
    },
    temperature: {
      title: "Température LLM",
      "desc-start":
        "Ce paramètre contrôle le niveau de créativité des réponses de votre LLM.",
      "desc-end":
        "Plus le nombre est élevé, plus la réponse sera créative. Pour certains modèles, cela peut entraîner des réponses incohérentes si la valeur est trop élevée.",
      hint: "La plupart des LLM ont diverses plages acceptables de valeurs valides. Consultez votre fournisseur LLM pour cette information.",
    },
  },

  // Vector Database
  "vector-workspace": {
    identifier: "Identifiant de la base de données vectorielle",
    snippets: {
      title: "Nombre maximum de contextes",
      description:
        "Ce paramètre contrôle le nombre maximum de contextes qui seront envoyés au LLM par chat ou requête.",
      recommend: "Recommandé: 4",
    },
    doc: {
      title: "Seuil de similarité des documents",
      description:
        "Le score de similarité minimum requis pour qu'une source soit considérée comme liée au chat. Plus le nombre est élevé, plus la source doit être similaire au chat.",
      zero: "Aucune restriction",
      low: "Bas (score de similarité ≥ .25)",
      medium: "Moyen (score de similarité ≥ .50)",
      high: "Élevé (score de similarité ≥ .75)",
    },
    reset: {
      reset: "Réinitialiser la base de données vectorielle",
      resetting: "Effacement des vecteurs...",
      confirm:
        "Vous êtes sur le point de réinitialiser la base de données vectorielle de cet espace de travail. Cela supprimera toutes les intégrations vectorielles actuellement intégrées.\n\nLes fichiers source originaux resteront intacts. Cette action est irréversible.",
      error:
        "La base de données vectorielle de l'espace de travail n'a pas pu être réinitialisée !",
      success:
        "La base de données vectorielle de l'espace de travail a été réinitialisée !",
    },
  },

  // Agent Configuration
  agent: {
    "performance-warning":
      "La performance des LLM qui ne supportent pas explicitement l'appel d'outils dépend fortement des capacités et de la précision du modèle. Certaines capacités peuvent être limitées ou non fonctionnelles.",
    provider: {
      title: "Fournisseur LLM de l'agent de l'espace de travail",
      description:
        "Le fournisseur et le modèle LLM spécifiques qui seront utilisés pour l'agent @agent de cet espace de travail.",
    },
    mode: {
      chat: {
        title: "Modèle de chat de l'agent de l'espace de travail",
        description:
          "Le modèle de chat spécifique qui sera utilisé pour l'agent @agent de cet espace de travail.",
      },
      title: "Modèle de l'agent de l'espace de travail",
      description:
        "Le modèle LLM spécifique qui sera utilisé pour l'agent @agent de cet espace de travail.",
      wait: "-- en attente des modèles --",
    },

    skill: {
      title: "Compétences par défaut de l'agent",
      description:
        "Améliorez les capacités naturelles de l'agent par défaut avec ces compétences préconstruites. Cette configuration s'applique à tous les espaces de travail.",
      rag: {
        title: "RAG et mémoire à long terme",
        description:
          "Permettez à l'agent de s'appuyer sur vos documents locaux pour répondre à une requête ou demandez à l'agent de se souvenir de morceaux de contenu pour la récupération de mémoire à long terme.",
      },
      view: {
        title: "Voir et résumer des documents",
        description:
          "Permettez à l'agent de lister et de résumer le contenu des fichiers de l'espace de travail actuellement intégrés.",
      },
      scrape: {
        title: "Récupérer des sites web",
        description:
          "Permettez à l'agent de visiter et de récupérer le contenu des sites web.",
      },
      generate: {
        title: "Générer des graphiques",
        description:
          "Activez l'agent par défaut pour générer différents types de graphiques à partir des données fournies ou données dans le chat.",
      },
      save: {
        title: "Générer et sauvegarder des fichiers dans le navigateur",
        description:
          "Activez l'agent par défaut pour générer et écrire des fichiers qui peuvent être sauvegardés et téléchargés dans votre navigateur.",
      },
      web: {
        title: "Recherche web en direct et navigation",
        "desc-start":
          "Permettez à votre agent de rechercher sur le web pour répondre à vos questions en se connectant à un fournisseur de recherche web (SERP).",
        "desc-end":
          "La recherche web pendant les sessions d'agent ne fonctionnera pas tant que cela ne sera pas configuré.",
      },
    },
  },

  // Workspace Chats
  recorded: {
    title: "Chats de l'espace de travail",
    description:
      "Voici tous les chats et messages enregistrés qui ont été envoyés par les utilisateurs, classés par date de création.",
    export: "Exporter",
    table: {
      id: "Id",
      by: "Envoyé par",
      workspace: "Espace de travail",
      prompt: "Invite",
      response: "Réponse",
      at: "Envoyé à",
    },
  },

  // Appearance
  appearance: {
    title: "Apparence",
    description:
      "Personnalisez les paramètres d'apparence de votre plateforme.",
    logo: {
      title: "Personnaliser le logo",
      description:
        "Téléchargez votre logo personnalisé pour rendre votre chatbot unique.",
      add: "Ajouter un logo personnalisé",
      recommended: "Taille recommandée: 800 x 200",
      remove: "Supprimer",
      replace: "Remplacer",
    },
    message: {
      title: "Personnaliser les messages",
      description:
        "Personnalisez les messages automatiques affichés à vos utilisateurs.",
      new: "Nouveau",
      system: "système",
      user: "utilisateur",
      message: "message",
      assistant: "Assistant de chat Mr.🆖 DocChat",
      "double-click": "Double-cliquez pour modifier...",
      save: "Enregistrer les messages",
    },
    icons: {
      title: "Icônes de pied de page personnalisées",
      description:
        "Personnalisez les icônes de pied de page affichées en bas de la barre latérale.",
      icon: "Icône",
      link: "Lien",
    },
  },

  // API Keys
  api: {
    title: "Clés API",
    description:
      "Les clés API permettent au titulaire d'accéder et de gérer de manière programmatique cette instance Mr.🆖 DocChat.",
    link: "Lisez la documentation de l'API",
    generate: "Générer une nouvelle clé API",
    table: {
      key: "Clé API",
      by: "Créé par",
      created: "Créé",
    },
  },

  llm: {
    title: "Préférence LLM",
    description:
      "Voici les identifiants et les paramètres de votre fournisseur LLM de chat et d'intégration préféré. Il est important que ces clés soient actuelles et correctes, sinon Mr.🆖 DocChat ne fonctionnera pas correctement.",
    provider: "Fournisseur LLM",
  },

  transcription: {
    title: "Préférence du modèle de transcription",
    description:
      "Voici les identifiants et les paramètres de votre fournisseur de modèle de transcription préféré. Il est important que ces clés soient actuelles et correctes, sinon les fichiers multimédias et audio ne seront pas transcrits.",
    provider: "Fournisseur de transcription",
    "warn-start":
      "L'utilisation du modèle local whisper sur des machines avec une RAM ou un CPU limités peut bloquer Mr.🆖 DocChat lors du traitement des fichiers multimédias.",
    "warn-recommend":
      "Nous recommandons au moins 2 Go de RAM et des fichiers téléchargés <10 Mo.",
    "warn-end":
      "Le modèle intégré se téléchargera automatiquement lors de la première utilisation.",
  },

  embedding: {
    title: "Préférence d'intégration",
    "desc-start":
      "Lorsque vous utilisez un LLM qui ne supporte pas nativement un moteur d'intégration - vous devrez peut-être spécifier en plus des identifiants pour intégrer le texte.",
    "desc-end":
      "L'intégration est le processus de transformation du texte en vecteurs. Ces identifiants sont nécessaires pour transformer vos fichiers et invites en un format que Mr.🆖 DocChat peut utiliser pour traiter.",
    provider: {
      title: "Fournisseur d'intégration",
      description:
        "Aucune configuration n'est nécessaire lors de l'utilisation du moteur d'intégration natif de Mr.🆖 DocChat.",
    },
  },

  text: {
    title: "Préférences de division et de découpage du texte",
    "desc-start":
      "Parfois, vous voudrez peut-être changer la façon dont les nouveaux documents sont divisés et découpés avant d'être insérés dans votre base de données vectorielle.",
    "desc-end":
      "Vous ne devez modifier ce paramètre que si vous comprenez comment fonctionne la division du texte et ses effets secondaires.",
    "warn-start": "Les changements ici s'appliqueront uniquement aux",
    "warn-center": "nouveaux documents intégrés",
    "warn-end": ", pas aux documents existants.",
    size: {
      title: "Taille des segments de texte",
      description:
        "C'est la longueur maximale de caractères pouvant être présents dans un seul vecteur.",
      recommend: "Longueur maximale du modèle d'intégration est",
    },

    overlap: {
      title: "Chevauchement des segments de texte",
      description:
        "C'est le chevauchement maximal de caractères qui se produit pendant le découpage entre deux segments de texte adjacents.",
    },
  },

  // Vector Database
  vector: {
    title: "Base de données vectorielle",
    description:
      "Voici les identifiants et les paramètres de fonctionnement de votre instance Mr.🆖 DocChat. Il est important que ces clés soient actuelles et correctes.",
    provider: {
      title: "Fournisseur de base de données vectorielle",
      description: "Aucune configuration n'est nécessaire pour LanceDB.",
    },
  },

  // Embeddable Chat Widgets
  embeddable: {
    title: "Widgets de chat intégrables",
    description:
      "Les widgets de chat intégrables sont des interfaces de chat publiques associées à un espace de travail unique. Ils vous permettent de créer des espaces de travail que vous pouvez ensuite publier dans le monde entier.",
    create: "Créer un widget intégré",
    table: {
      workspace: "Espace de travail",
      chats: "Chats envoyés",
      Active: "Domaines actifs",
    },
  },

  "embed-chats": {
    title: "Chats intégrés",
    description:
      "Voici tous les chats et messages enregistrés de tout widget intégré que vous avez publié.",
    table: {
      embed: "Intégration",
      sender: "Expéditeur",
      message: "Message",
      response: "Réponse",
      at: "Envoyé à",
    },
  },

  multi: {
    title: "Mode multi-utilisateurs",
    description:
      "Configurez votre instance pour prendre en charge votre équipe en activant le mode multi-utilisateurs.",
    enable: {
      "is-enable": "Le mode multi-utilisateurs est activé",
      enable: "Activer le mode multi-utilisateurs",
      description:
        "Par défaut, vous serez le seul administrateur. En tant qu'administrateur, vous devrez créer des comptes pour tous les nouveaux utilisateurs ou administrateurs. Ne perdez pas votre mot de passe car seul un utilisateur administrateur peut réinitialiser les mots de passe.",
      username: "Nom d'utilisateur du compte administrateur",
      password: "Mot de passe du compte administrateur",
    },
    password: {
      title: "Protection par mot de passe",
      description:
        "Protégez votre instance Mr.🆖 DocChat avec un mot de passe. Si vous oubliez ce mot de passe, il n'y a pas de méthode de récupération, donc assurez-vous de le sauvegarder.",
    },
    instance: {
      title: "Protéger l'instance par mot de passe",
      description:
        "Par défaut, vous serez le seul administrateur. En tant qu'administrateur, vous devrez créer des comptes pour tous les nouveaux utilisateurs ou administrateurs. Ne perdez pas votre mot de passe car seul un utilisateur administrateur peut réinitialiser les mots de passe.",
      password: "Mot de passe de l'instance",
    },
  },

  // Event Logs
  event: {
    title: "Journaux d'événements",
    description:
      "Consultez toutes les actions et événements se produisant sur cette instance pour la surveillance.",
    clear: "Effacer les journaux d'événements",
    table: {
      type: "Type d'événement",
      user: "Utilisateur",
      occurred: "Survenu à",
    },
  },

  // Privacy & Data-Handling
  privacy: {
    title: "Confidentialité et gestion des données",
    description:
      "Voici votre configuration pour la gestion des données et des fournisseurs tiers connectés avec Mr.🆖 DocChat.",
    llm: "Sélection LLM",
    embedding: "Préférence d'intégration",
    vector: "Base de données vectorielle",
    anonymous: "Télémétrie anonyme activée",
  },
};

export default TRANSLATIONS;
