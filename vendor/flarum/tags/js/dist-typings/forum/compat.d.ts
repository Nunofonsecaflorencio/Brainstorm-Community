declare const _default: {
    'tags/utils/sortTags': typeof import("../common/utils/sortTags").default;
    'tags/models/Tag': typeof import("../common/models/Tag").default;
    'tags/helpers/tagsLabel': typeof import("../common/helpers/tagsLabel").default;
    'tags/helpers/tagIcon': typeof import("../common/helpers/tagIcon").default;
    'tags/helpers/tagLabel': typeof import("../common/helpers/tagLabel").default;
    'tags/components/TagSelectionModal': typeof import("../common/components/TagSelectionModal").default;
    'tags/states/TagListState': typeof import("../common/states/TagListState").default;
} & {
    'tags/addTagFilter': typeof addTagFilter;
    'tags/addTagControl': typeof addTagControl;
    'tags/components/TagHero': typeof TagHero;
    'tags/components/TagDiscussionModal': typeof TagDiscussionModal;
    'tags/components/TagsPage': typeof TagsPage;
    'tags/components/DiscussionTaggedPost': typeof DiscussionTaggedPost;
    'tags/components/TagLinkButton': typeof TagLinkButton;
    'tags/addTagList': typeof addTagList;
    'tags/addTagLabels': typeof addTagLabels;
    'tags/addTagComposer': typeof addTagComposer;
    'tags/utils/getSelectableTags': typeof getSelectableTags;
};
export default _default;
import addTagFilter from "./addTagFilter";
import addTagControl from "./addTagControl";
import TagHero from "./components/TagHero";
import TagDiscussionModal from "./components/TagDiscussionModal";
import TagsPage from "./components/TagsPage";
import DiscussionTaggedPost from "./components/DiscussionTaggedPost";
import TagLinkButton from "./components/TagLinkButton";
import addTagList from "./addTagList";
import addTagLabels from "./addTagLabels";
import addTagComposer from "./addTagComposer";
import getSelectableTags from "./utils/getSelectableTags";
