import  MetaModel = require("../metamodel")
import  Sys = require("./systemTypes")
import  datamodel=require("./datamodel")
import  common=require("./common")
/////////////////////////////////
// GENERIC GLOBAL DECLARATIONS

export class AnnotationType extends common.RAMLLanguageElement implements Sys.DeclaresDynamicType<AnnotationType>{
    name:string
    $name=[MetaModel.key(),MetaModel.description("Name of this annotation type")]

    usage: string

    parameters:datamodel.DataElement[];
    $parameters=[MetaModel.setsContextValue("fieldOrParam",true),MetaModel.declaringFields(),
        MetaModel.setsContextValue("locationKind",datamodel.LocationKind.APISTRUCTURE),
        MetaModel.setsContextValue("location",datamodel.ModelLocation.ANNOTATION),
        MetaModel.description("Declarations of parameters allowed in this annotation type"),
        MetaModel.valueDescription("An object whose property names are the parameter names the annotation expects and whose values are their data types.")
    ];

    allowMultiple:boolean;
    $allowMultiple=[
        MetaModel.declaringFields(),
        MetaModel.description("Whether multiple instances of annotations of this type may be applied simultaneously at the same location")
    ];

    allowedTargets:AnnotationTarget[]
    $allowedTargets=[
        MetaModel.extraMetaKey("annotationTargets"),
        MetaModel.oneOf(
            [
                "API",
                "DocumentationItem",
                "Resource",
                "Method",
                "Response",
                "RequestBody",
                "ResponseBody",
                "DataElement",
                "NamedExample",
                "ResourceType",
                "Trait",
                "SecurityScheme",
                "SecuritySchemeSettings",
                "AnnotationType",
                "Library",
                "Overlay",
                "Extension"
            ]

        ),
        MetaModel.description("Restrictions on where annotations of this type can be applied. If this property is specified, annotations of this type may only be applied on a property corresponding to one of the target names specified as the value of this property."),
        MetaModel.valueDescription("An array of names (or a single name) from the list of Target Names in the [[raml-10-spec-target-locations-table|Target Locations table]]  below. ")
    ]

    $displayName = [ MetaModel.description("An alternate, human-friendly name for the annotation") ]

    $description = [
        MetaModel.description("A longer, human-friendly description of the annotation"),
        MetaModel.valueDescription("Markdown string")
    ]

    $usage = [
        MetaModel.description("Instructions on how and when to use this annotation in a RAML spec."),
        MetaModel.valueDescription("Markdown string")
    ]

    //On the design level every annotation usage is instantiation of subclass of particular AnnotationType
    //on the runtime level it is just Annotation (which is abstract on  the design level)
    //this inheritance strangeness happens because we do not want bring AnnotationType fields to Annotation
    //TODO think about it
    $=[MetaModel.declaresSubTypeOf("Annotation"),MetaModel.thisFeatureCovers("https://github.com/raml-org/raml-spec/issues/147")]
}
export class AnnotationRef extends Sys.Reference<AnnotationType>{

    $=[MetaModel.description("Instantiation of annotations. It allows you to attach some meta information to your API")]
}
export class AnnotationTarget extends Sys.ValueType{

}



//This type did not exists on RAML design level (basically it's design level counter part is AnnotationRef)
export class Annotation<T>{
    name:string

    $name=[MetaModel.key()]
}
